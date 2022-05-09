export interface AuthResponse {   //propiedades (10)
  ok:     boolean;
  uid?:    string;
  name?:   string;
  email?: string;
  token?:  string;
  msg?:    string;
}

export interface Usuario {    //creamos la interface de usuario(15) y vamos al archivo auth.services.ts
  uid: string;
  name: string;
  email: string;
}
