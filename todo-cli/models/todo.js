// models/todo.js
'use strict';
const {
  Op,
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      
     // const deleteItem = async (id) => {
       // try {
           // const deleted =await Todo.destroy({
            //    where: {
               // id: id
             //  },
              
         //  });
           
        //   console.log(`deleted :${id}`)   
      //  } catch (error){
      //  console.error(error)
     //  }
 // }
  // await deleteItem([])
            
      console.log("Overdue");
      // FILL IN HERE
     
       const a=await this.overdue();
        const c=a.map(item=>item. displayableString()).join("\n");
        console.log(c,"\n")
       
       
      console.log("Due Today");
      // FILL IN HERE
      const v=await this.dueToday();
      const s=v.map(item=>item. displayableString()).join("\n");
      console.log(s,"\n")
     
      console.log("Due Later");
      // FILL IN HERE
      const r=await this.dueLater();
      const t=r.map(item=>item. displayableString()).join("\n");
      console.log(t);
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
   
       return await  Todo.findAll({
          where:{
            dueDate:{
            [Op.lt] : new Date(),
            },
       }
       });
        }
        static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      return await  Todo.findAll({
        where:{
          dueDate:{
          [Op.eq] : new Date(),
          },
     }
     });
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      return await  Todo.findAll({
        where:{
          dueDate:{
          [Op.gt] : new Date(),
          },
     }
     });
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      
        
           return await Todo.update({completed:true},{
                where: {
                  id: id
                },
              
            });
           
     
    
    


    }

    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      const z=new Date(this.dueDate)
      if(z.getDate()===new Date().getDate()){
      return `${this.id}. ${checkbox} ${this.title}`;}
      else{ return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;}
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};