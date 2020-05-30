const Employee=require("../models/employee")
module.exports = function(req, res, next) {
    if (req.session.employeeId) {
      Employee.findById(req.session.employeeId)
        .then(function(employee) {
          req.employee = employee;
          next();
        })
        .catch(function(err) {
        console.log(err.message);
          res.redirect("/");
        });
    } else res.redirect("/");
  };
  