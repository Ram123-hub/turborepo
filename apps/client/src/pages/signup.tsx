import { Signup } from '../../../../packages/ui/src/components/signup';


export default function Siginpage (){

    return<div>
   <Signup onClick= {(username, password)=>{
     alert(username);
     alert(password);
   }}/>
    </div>
}