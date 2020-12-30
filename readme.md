-Documentation Of Project:
Employee Application -
1.This is the application where user can create employee,delet employees and list all employees.
2.for creating new employee,user need to register with name,email and password.After registration user can login.
3.Only registered user can see all employee list in decending order by clicking get all employee list button.

4.By clicking on delet button the particular employee gets deleted.User can delet any employee.
5.User is nevigated from all employee list page where by clicking on create employee button user can create new employee.
6.Employee card is having name,age ,salary and id of employee.

-User authentication
To list all employees,craete employees and delet employees user need authentication.Here passport js can be used to authrization but I used simple logic to get authrization.

-Form validation
While registering and login user must enter valide name,password and email.If not form will show an error to user.

-Libreries used:
Front-end : React , Redux,Bootstrap
Back-end : Node js,Express js
Database: Mongodb
For Authorization : Passport js,jwt token

-steps to execute program:

1. Type the url in search bar : https://employee-new-app.herokuapp.com/
2. When website loads user can perform operations

application heroku deployed link:
https://employee-new-app.herokuapp.com/

Github link:
https://github.com/sneha-gurav-au6/employee-app

\*Note- The api link provided in assignment question is not working (api link sending error massage ,not providing data) for that reason backend is created.
