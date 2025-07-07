function userMangerModule()
{
    userList =[];
    function adduser(uname){
        userList.push(uname);
        _printConfirmation(uname);

    }
    function _printConfirmation(uname){
        console.log("user added=name:",uname);

    }
    return {addnewuser:adduser};

}
const usermanager = userMangerModule();
usermanager.addnewuser("Harry");
