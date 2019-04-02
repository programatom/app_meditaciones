export interface ObjRespuestaServidor {
  status:string,
  data:any
};
export interface ObjLocalStorage {
  token:any
}

export interface ObjUserData{
  nombre:string
  segundos_meditados:number
  puntaje:number
  meditaciones_escuchadas:number
  amigos:{
    enviadas:Array<ObjAmigo>
    recibidas:Array<ObjAmigo>
  }
  email:string
  id:number
  initCats:Array<{
    nombre_categoria
  }>
  initMeds:Array<any>
}

export interface ObjAmigo{
  estado:string
  user_data:{
    segundos_meditados:number
    puntaje:number
    meditaciones_escuchadas:number
  }
  user:{
    nombre:string
    email:string
  }
}
