import Event from "../pages/Event"
import Login from "../pages/Login"

export interface IRoute{
    path:string;
    component: React.ComponentType;
    exact?:boolean;
}

export const publicRoutes:IRoute[] = [
{path:'/login',component:Login,exact:true}
] 

export enum RouteNames{
    LOGIN = '/login',
    EVENT = '/',

}
export const privateRoutes:IRoute[] = [
    {path:RouteNames.LOGIN,component:Login,exact:true},
    {path:RouteNames.EVENT,component:Event,exact:true}
    ] 