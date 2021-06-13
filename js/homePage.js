let employeePayrollList;

//(Day-47) UC-4 To display EmployeePayrollDetails in Tabular Format using Template literals
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Called Event");
    employeePayrollList = getDataFromLocalStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem("edit-emp");
});

const createInnerHtml = () => {
    const headerHtml ="<tr><th></th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    //const empPayrollDataList = createEmployeePayrollJSON ();
    let innerHtml = `${headerHtml}`;
    for(let empPayrollData of employeePayrollList) {
        innerHtml =`${innerHtml}
   
                    <tr>
                        <td><img src="${empPayrollData._profilePic}"></td>
                        <td>${empPayrollData._name}</td>
                        <td>${empPayrollData._gender}</td>
                        <td>${getDepatmentHtml(empPayrollData._department)}
                        <!-- <div class="dept-label">${empPayrollData._department[0]}"</div>
                        <div class="dept-label">${empPayrollData._department[1]}"</div> -->
                        </td >
                        <td>${empPayrollData._salary}</td>
                        <td>${empPayrollData._startDate}</td>
                        <td>
                            <img name="${empPayrollData._id}" src="./assets/icons/delete-black-18dp.svg" alt="Delete" onclick="remove(this)">
                            <img name="${empPayrollData._id}" src="./assets/icons/create-black-18dp.svg" alt="Edit" onclick="update(this)">
                        </td>
                    </tr>`;
        document.querySelector('#display').innerHTML=innerHtml;}
    }

//(Day-47) UC-5 To display Employee Details from JSON object
const getDepatmentHtml = (data) => {
    let deptHtml ='';
    for(let dept of data){
        deptHtml = `${deptHtml}<div class ='dept-label'>${dept}</div>`;
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    const empPayrolllistLocal = [
        {
            _id : new Date().getTime,
            _name : "Narayan Mahadevan",
            _gender : 'Male',
            _department : [
                 'Engineer',
                 'Finance'
            ],
            _salary : 500000,
            _startDate : '29 Oct 2019',
            _note : '',
            _profilePic : './assets/profile-images/Ellipse -2.png'
        },
        {
            _id : new Date().getTime,
            _name : "Neha Sharma",
            _gender : 'Female',
            _department : [
                 'Sales',
                 'Finance'
            ],
            _salary : 500000,
            _startDate : '19 Oct 2019',
            _note : '',
            _profilePic : "./assets/profile-images/Ellipse -7.png"
        }    
    ]
    return empPayrolllistLocal;
}

//(Day-47) UC-6 To display data from the Local Storage
const getDataFromLocalStorage= () => {
    return localStorage.getItem('EmployeePayrollList')? 
           JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

//Day-48 UC-1 To remove an Employee from the Payroll Details Table
const remove = (data) => {

    let employeeData = employeePayrollList.find(empData => empData._id == data._id);
    if (!employeeData) {
        return;
    }
    const index = employeePayrollList.map(empData => empData._id).indexOf(employeeData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem('EmployeePayrollList', JSON.stringify(employeePayrollList));
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHtml();
}

const update = (data) => {
    let employeeData = employeePayrollList.find(empData => empData._id == data._id);
    if (!employeeData) {
        return;
    }
    localStorage.setItem('edit-emp', JSON.stringify(employeeData));
    window.location.replace(site_properties.add_employee_page);
}