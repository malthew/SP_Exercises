package tester;

import entity.Employee;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class Tester {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(new Employee("xa12tt", "Kurt", "Wonnegut", new BigDecimal(335567)));
            em.persist(new Employee("hyu654", "Hanne", "Olsen", new BigDecimal(435867)));
            em.persist(new Employee("uio876", "Jan", "Olsen", new BigDecimal(411567)));
            em.persist(new Employee("klo999", "Irene", "Petersen", new BigDecimal(33567)));
            em.persist(new Employee("jik666", "Tian", "Wonnegut", new BigDecimal(56567)));
            em.getTransaction().commit();
            
            //Complete all these small tasks. Your will find the solution to all, but the last,
            //In this document: https://en.wikibooks.org/wiki/Java_Persistence/JPQL#JPQL_supported_functions
            
            //1) Create a query to fetch all employees with a salary > 100000 and print out all the salaries
            Query query = em.createQuery("Select e FROM Employee e WHERE e.salary > 100000");
            List<Employee> result = query.getResultList();
            for(Employee employee : result) {
                System.out.println("Salary: " + employee.getSalary()+ "\n");
            }
            
            //2) Create a query to fetch the employee with the id "klo999" and print out the firstname
            String id = "klo999";
            Query query2 = em.createQuery("Select e FROM Employee e WHERE e.id = :id");
            query2.setParameter("id", id);
            Employee result2 = (Employee)query2.getSingleResult();
            System.out.println("Employee klo999: " + result2.getFirstName() + "\n");
            
            //3) Create a query to fetch the highest salary and print the value
            Query query3 = em.createQuery("Select MAX(e.salary) FROM Employee e");
            BigDecimal result3 = (BigDecimal)query3.getSingleResult();
            System.out.println("The highest salary is: " + result3 + "\n");

            //4) Create a query to fetch the firstName of all Employees and print the names
            Query query4 = em.createQuery("Select e.firstName FROM Employee e");
            List<String> result4 = query4.getResultList();
            System.out.println("Firstnames: " + result4);
            
            //5 Create a query to calculate the number of employees and print the number
            Query query5 = em.createQuery("SELECT COUNT(e) FROM Employee e");
            Long count = (Long)query5.getSingleResult();
            System.out.println("There are " + count + " employees.");
            
            //6 Create a query to fetch the Employee with the higest salary and print all his details
            Query query6 = em.createQuery("SELECT e FROM Employee e WHERE e.salary= :salary");
            query6.setParameter("salary", result3);
            Employee result6 = (Employee)query6.getSingleResult();
            System.out.println("\nID: " + result6.getId() + ". Name: " + result6.getFirstName()
            + " " + result6.getLastName() + ". Salary: " + result6.getSalary());
            
            
        } finally {
            em.close();
            emf.close();
        }
    }

}
