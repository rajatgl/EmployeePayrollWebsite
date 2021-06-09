class EmployeePayrollData {

    get id(){return this._id}
    //UC14: regex check for id
    set id(id){
        const ID_REGEX = /^[1-9]+[0-9]*/
        if(ID_REGEX.test(id)){
            this._id = id
            return;
        }
        else
            throw "Invalid employeeId"
    }

    get name(){return this._name}
    //UC13: regex check for name
    set name(name)
    {   
        const NAME_REGEX = /^[A-Z]{1}[a-z]{3,}$/
        if(NAME_REGEX.test(name)){
            this._name = name
            return
        }
        else throw "Invalid Name"
    }

    get profilePic(){
        return this._profilePic
    }
    set profilePic(profilePic){
        this._profilePic = profilePic
    }

    get gender(){return this._gender}
    set gender(gender){
        const GENDER_REGEX = /^[F/M/undefined]{1}/
        if(GENDER_REGEX.test(gender))
            this._gender = gender
        else
            throw "Invalid gender" 
    }
    
    get department(){
        return this._department
    }
    set department(department){
        this._department = department
    }

    get salary(){return this._salary}
    set salary(salary){
        const SALARY_REGEX = /^[1-9]+[0-9]*(\.[0-9]+)?/
        if(SALARY_REGEX.test(salary))
            this._salary = salary
        else
            throw "Invalid salary"
    }

    get startDate(){return this._startDate}
    set startDate(startdate){
        let date
        const currentDate = new Date()
        if(startdate!=undefined){
            startdate = startdate.split("/")
            date = new Date(startdate[2],startdate[1]-1,startdate[0])
        }
        if(startdate == undefined||date.getTime()<=currentDate.getTime()){
            this._startDate = startdate
            return;
        }
        else
            throw "Invalid Date"
    }

    get node(){
        return this._note
    }
    set note(note){
        this._note = note;
    }

    toString() {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !startDate ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "id="+this.id + ",name='"+this.name + ", gender='"+this.gender + ", profilePic='"+this.profilePic
        + ", deparment="+this.deparment + ", salary="+ this.salary+ ", startDate="+empDate + ",note="+ this.note;
        }

    
}