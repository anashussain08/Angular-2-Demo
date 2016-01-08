import {Component} from 'angular2/core';
//import {Todo} from 'todo';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
@Component({
	selector:'app',
	templateUrl:'./app/app.html',
	directives:[MATERIAL_DIRECTIVES]
	
})

export class MainComponent{
	tasks:any=[];
    todo:string;
    count:number=this.tasks.length;
	submit(){
        
		this.tasks.push(this.todo);
        console.log(this.tasks+'>>>>'+this.count);
        this.todo = '';
        this.count++;
}
    check(items){
        if(items.checked){
            this.count++;
        }
        else{
            
            this.count--;
        }
        console.log(this.count);
        
    }
}