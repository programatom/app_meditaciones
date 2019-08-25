import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    // MEDIA URL FORMAT
    // WEBSITE_URL_LARAVEL/storage/audios/categorias/categoria_a/1.mp3

    /*
    Repuesta de list dir
    "isFile":true,
     "isDirectory":false,
     "name":"6.mp3",
     "fullPath":"/categoria_a/6.mp3",
     "filesystem":"<FileSystem: library-nosync>",
     "nativeURL":"file:///Users/tomasgarciapineiro/Library/Developer/CoreSimulator/Devices/234687B1-1F5D-429B-8845-3E1BCF6C7505/data/Containers/Data/Application/8469C67B-794C-4A7E-A84B-845F5B212BB7/Library/NoCloud/categoria_a/6.mp3"

     */
    downloadAsyncCounter = 0;
    deleteAsyncCounter = 0;

    downloadErrors = [];
    downloadedFiles = [];
    categoria = "";

    constructor(private file: File,
        private fileTransfer: FileTransfer,
        private plt: Platform,
        private localStorageServ: LocalStorageService) {


    }

    getFileName(fileUrl: string) {
        let split = fileUrl.split("");
        let nameArray = [];
        for (let i = split.length; i > 0; i--) {
            let character = split[i];
            if (character == "/") {
                break;
            }
            nameArray.push(character);
        }
        nameArray.reverse();
        return nameArray.join("");
    }

    generateFilePathArray(audios, categoria) {
        let files: Array<{
            "url": string
            "name": string
            "path": string
        }> = [];
        this.categoria = categoria;
        for (let i = 0; i < audios.length; i++) {
            let audioUrl = audios[i].url;
            let name = "";
            files.push({
                "url": audioUrl,
                "path": categoria + "/",
                "name": this.getFileName(audioUrl)
            });
        }
        console.log(files);
        return files;
    }

    getDeviceDirectory() {
        if (this.plt.is("cordova")) {
            if (this.plt.is('ios')) {
                let directoryIos = this.file.dataDirectory;
                return directoryIos;
            } else if (this.plt.is('android')) {
                let directoryAndroid = this.file.externalDataDirectory;
                return directoryAndroid;
            }
        } else {
            return null;
        }
    }

    async switchCordovaAndDataDirectories(files: Array<{
        "url": string,
        "name": string,
        "path": string
    }>, categoria) {

        if (this.plt.is('cordova')) {
            if (this.plt.is('ios')) {
                let directoryIos = this.file.dataDirectory;
                let result = await this.getDirectoriesAndCarryOn(files, categoria, true, directoryIos);
                return result;
            } else if (this.plt.is('android')) {
                let directoryAndroid = this.file.externalDataDirectory;
                let result = await this.getDirectoriesAndCarryOn(files, categoria, true, directoryAndroid);
                return result;
            }
        } else {
            // CASO DESKTOP
            // USO EL LOCAL STORAGE DE KEYS

            this.localStorageServ.insertAndInstantiateValue(categoria, files).then(() => {
                return;
            });
        }
    }

    async getDirectoriesAndCarryOn(files, categoria, isCordova, directory?) {
        // Compare server data with local data.
        var arrayMediaLocal = [];
        var arrayMediaServer = files;
        this.downloadAsyncCounter = 0;
        this.deleteAsyncCounter = 0;

        if (isCordova) {
            this.getCategoriaDirectory(categoria, directory).then((responseDirectory)=>{
              console.log("Respuesta del directory: " + JSON.stringify(responseDirectory))
              if (responseDirectory["found"]) {
                arrayMediaLocal = responseDirectory["dir"]
              } else {
                arrayMediaLocal = null;
              }
              this.checkDifferenceBetweenLocalAndServerMedia(arrayMediaLocal,arrayMediaServer,directory,categoria).then((result)=>{
                return result;
              })
            });
        } else {
            if (this.localStorageServ.localStorageObj[categoria] != undefined) {
                arrayMediaLocal = this.localStorageServ.localStorageObj[categoria];
            } else {
                arrayMediaLocal = null
            }
        }


    }

    async checkDifferenceBetweenLocalAndServerMedia(arrayMediaLocal,
        arrayMediaServer,
        directory,
        categoria) {

        var elementsToDownload = [];
        var elementsToDelete = [];

        if (arrayMediaLocal != null) {

            // Si el length es igual, todos deberían ser iguales.
            // Si son iguales, entonces checkear ai alguno no esta en el server array y eliminarlo luego
            // identificar cual o cuales de los elementos no estan en el otro.
            // Despues de eliminarlos checkeo cuales me faltan agregar y los descargo

            // Si es distinto, se hace lo mismo
            let checkObj = this.checkElementsToDownloadAndEliminate(arrayMediaLocal, arrayMediaServer);
            console.log("checkObj: ", JSON.stringify(checkObj))
            elementsToDownload = checkObj["elementsToDownload"];
            elementsToDelete = checkObj["elementsToDelete"];
        } else {
            elementsToDownload = arrayMediaServer;
            this.downloadAsyncCounter = 0;
        }

        let lengthDelete = elementsToDelete.length;
        let lengthDownload = elementsToDownload.length;

        if (lengthDelete == 0 && lengthDownload == 0) {
            // No action needed
            return "no action needed";
        } else {

            if (lengthDelete > 0) {
                let resultDelete = await this.deleteElements(directory, elementsToDelete, categoria);
                console.log("Delete result: " + resultDelete);
            }

            if (lengthDownload > 0) {
                this.downloadErrors = [];
                this.downloadedFiles = [];
                console.log("Downloading elements..")
                let resultDownload = await this.downloadElements(directory, elementsToDownload);
                console.log("Download result: " + resultDownload);
                return resultDownload;
            }
        }
    }

    getAllCategorias(){
    }



    getCategoriaDirectory(categoria, directory) {
      return new Promise((resolve)=>{
        this.file.checkDir(directory, categoria).then((checkDir) => {
          console.log("Respuesta del directorio: " + JSON.stringify(checkDir));
          if (checkDir) {
            this.file.listDir(directory, categoria).then((arrayDirectory) => {
              console.log("checkDir: " + JSON.stringify(arrayDirectory));
              resolve( {
                "found": true,
                "dir": arrayDirectory
              });
            }).catch((err) => {
              console.log("Error list dir" + JSON.stringify(err));
            });
          }
        }).catch((err) => {
          console.log("checkDirError: " + JSON.stringify(err));
          // Acá va cuando no encuentra el archivo
          resolve( {
            "found": false,
          });
        });

      });
    }

    deleteDirectory(categoria) {
        if (this.plt.is("cordova")) {
            let directory = this.getDeviceDirectory();
            this.file.removeRecursively(directory, categoria).then((removeDir) => {
                console.log("Removed dir: " + JSON.stringify(removeDir));
                return;
            }).catch((err) => {
                console.log("Error con removeDir: " + JSON.stringify(err))
                return;
            })
        } else {
            this.localStorageServ.eliminateOneValueInStorage(categoria).then(() => {
                return;
            });
        }
    }

    checkElementsToDownloadAndEliminate(arrayMediaLocal, arrayMediaServer) {
        let elementsToDelete = [];
        let elementsToDownload = [];

        arrayMediaLocal.filter((localElement, index) => {
            let match = false;
            for (let i = 0; i < arrayMediaServer.length; i++) {
                let serverElement = arrayMediaServer[i];
                if (serverElement.name == localElement.name) {
                    match = true;
                }
            }
            if (!match) {
                elementsToDelete.push(localElement);
                arrayMediaLocal.splice(index, 1);
            }
        });

        console.log("Array media local despues del filtro1 : ", JSON.stringify(arrayMediaLocal));

        arrayMediaServer.filter((serverElement, index) => {
            let match = false;
            for (let i = 0; i < arrayMediaLocal.length; i++) {
                let localElement = arrayMediaLocal[i];
                if (serverElement.name == localElement.name) {
                    match = true;
                }
            }
            if (!match) {
                elementsToDownload.push(serverElement);
                arrayMediaLocal.push(serverElement);
            }
        });
        console.log("Array media local despues del filtro2 : ", JSON.stringify(arrayMediaLocal));


        return {
            "elementsToDelete": elementsToDelete,
            "elementsToDownload": elementsToDownload
        }
    }

    async deleteElements(directory, elements, categoria) {
        if (this.deleteAsyncCounter > elements.length - 1) {
            return "finished deleting";
        }

        let i = this.deleteAsyncCounter;
        let element = elements[i];
        console.log("path del delete: " + directory + categoria + element.name);
        this.file.removeFile(directory + categoria, element.name).then((removed) => {
            console.log("Success in removing file: " + JSON.stringify(removed));
            this.deleteAsyncCounter++;
            this.deleteElements(directory, elements, categoria);
        }).catch((error) => {
            console.log("Error in remove file: " + JSON.stringify(error));
            this.deleteAsyncCounter++;
            this.deleteElements(directory, elements, categoria);
        });

    }

    downloadElements(dir, files: Array<{
        "url": string,
        "name": string,
        "path": string
    }>) {
        if (this.downloadAsyncCounter > files.length - 1) {
            // Se termina el proceso
            this.handleEndDownloadProcess();
            return;
        }

        let i = this.downloadAsyncCounter;

        const fileTransferObj: FileTransferObject = this.fileTransfer.create();
        // EL URL DE LA DESCARGA
        const urlUri = encodeURI(files[i].url);
        let path = dir + files[i].path + files[i].name;
        console.log("URL y PATH DEL ARCHIVO: ")
        console.log(urlUri, path)
        fileTransferObj.download(urlUri, path).then((respuesta) => {
            console.log(respuesta);
            this.handleDownloadSuccess(dir, files, files[i]);
        },
            (err) => {
                console.log("Ocurrió un error con la descarga: ", JSON.stringify(err));
                this.handleDownloadError(files[i], dir, files);
            });
    }

    handleDownloadSuccess(dir, files, downloadedFile) {
        this.downloadAsyncCounter++;
        this.downloadedFiles.push(downloadedFile);
        this.downloadElements(dir, files);

    }

    handleDownloadError(file, dir, files) {
        this.downloadAsyncCounter++;
        this.downloadErrors.push(file);
        this.downloadElements(dir, files);
    }

    handleEndDownloadProcess() {
        console.log("End process: ", JSON.stringify(this.downloadedFiles));
        return;
    }



}
