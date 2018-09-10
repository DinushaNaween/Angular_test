import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegsiterService {
  constructor(private http: HttpClient) { }

regsiter_api ="http://localhost:3000/user/register1"


regsister_api_call(user){

return this.http.post(this.regsiter_api,user).toPromise().then(response=>{
 console.log(response);
    return response;

}).catch(err=>{

    console.log(err);
    return err;
});

}

}