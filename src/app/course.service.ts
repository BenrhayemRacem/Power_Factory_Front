import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";


export interface ICourse {
  id:string;
  name:string;
  description:string;
  date:string;
  time:string;
  createdAt:string;
  updatedAt:string;
  deletedAt:string|null;
  photos : {
    id:string,
    url:string
  }[];

}

export interface IGetCourse {
  data:ICourse[],
  numberOfPages:number,
  page:number,
  total:number
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor( private http:HttpClient) { }


  getAllCourses(){
    return this.http.get<IGetCourse>(environment.apiBaseUrl + "/course")
  }
}
