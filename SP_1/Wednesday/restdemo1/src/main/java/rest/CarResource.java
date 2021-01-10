package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.CarDTO;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;


@Path("car")
public class CarResource {

    @Context
    private UriInfo context;
    
    private static Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    private static List<CarDTO> cars = new ArrayList();
    
    
    /**
     * Creates a new instance of CarResource
     */
    public CarResource() {
        if (cars.isEmpty()){
            cars.add(new CarDTO("Volvo", 12000, 1995));
            cars.add(new CarDTO("ww", 1234, 1980));
            cars.add(new CarDTO("Toyota", 14000, 2000));
            cars.add(new CarDTO("Zap", 3, 2000));
            cars.add(new CarDTO("Test", 3, 2000));
            cars.add(new CarDTO("Test2", 3, 2000));
           
        }
    }

    /**
     * Retrieves representation of an instance of rest.CarResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //returnere et tomt array via json notation
        return "[]";
    }

    // Skal skrive api/car/driver
    @Path("driver")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson2() {
        //returnere et tomt array via json notation
        
        return "{\"name\":\"Kurt\"}";
    }
    
    @Path("carobject")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson3() {
        CarDTO car = new CarDTO("Volvo", 12000, 1995);
        
        String jsonString = GSON.toJson(car);
        return jsonString;
        
    }
    
    
    @Path("allcars")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson4() {
        String jsonString = GSON.toJson(cars);
        return jsonString;
    }
    
    /**
     * PUT method for updating or creating an instance of CarResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
