export class Post{
  userId:number;
  id:number;
  title:string;
  body:string;
  constructor(userId:number,id:number,title:string,body:string){
    this.title=title;
    this.userId=userId;
    this.body=body;
    this.id=id;
  }
}
