using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;


namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/employees")]
    public class EmployeesController : Controller

    {
        private FullStackDbContext db = new FullStackDbContext();
         public readonly FullStackDbContext _fullStackDbContext;

         public EmployeesController(FullStackDbContext fullStackDbContext)
         {
             _fullStackDbContext = fullStackDbContext;
         }
         [HttpGet]
         public async  Task<IActionResult> GetAllEmployees()

         {
             var employees =await _fullStackDbContext.Employees.ToListAsync();
             return Ok(employees);


         }
        [HttpPost]
        public async Task<IActionResult> AddEmployees([FromBody] Employee employeeRequest)

        {
            employeeRequest.Id = Guid.NewGuid();
             await _fullStackDbContext.Employees.AddAsync(employeeRequest);
             await _fullStackDbContext.SaveChangesAsync();
            return Ok(employeeRequest);



        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var Employee = await _fullStackDbContext.Employees.FindAsync(id);

            if (Employee == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Employees.Remove(Employee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(Employee); 
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
          var employee =  await _fullStackDbContext.Employees.FirstOrDefaultAsync(x=>x.Id == id);
            if(employee == null) { 
            
            return NotFound();  
            }
            return Ok(employee);

        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id,Employee UpdateEmployeeRequest )
        {
          var employee= await   _fullStackDbContext.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            employee.Name = UpdateEmployeeRequest.Name;
            employee.Email = UpdateEmployeeRequest.Email;
            employee.Salary = UpdateEmployeeRequest.Salary;
            employee.Phone = UpdateEmployeeRequest.Phone;
            employee.Department = UpdateEmployeeRequest.Department;

            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employee);

        }




    }


}
