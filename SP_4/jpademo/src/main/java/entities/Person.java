/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

/**
 *
 * @author Malthe
 */
@Entity
public class Person implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long p_id;
    private String name;
    private int year;
    // Hvis man siger CascadeType.ALL så hvis man sletter en person sletter den også den tilhørende addresse
    @OneToOne(cascade = CascadeType.PERSIST)
    private Address address;

    // MappedBy skal være på One siden altså der er 1 person til mange fees
    // og dette gør at vi ikke får person_fee tabellen i workbench
    @OneToMany(mappedBy = "person", cascade = CascadeType.PERSIST)
    List<Fee> fees;
    
    @ManyToMany(mappedBy = "persons", cascade = CascadeType.PERSIST)
    List<SwimStyle> styles;
    
    public List<Fee> getFees() {
        return fees;
    }

    public void AddFee(Fee fee) {
        this.fees.add(fee);
        if (fee != null){
            fee.setPerson(this);
        }
    }
    
    public void AddSwimStyle(SwimStyle style) {
        if (style != null){
            this.styles.add(style);
            style.getPersons().add(this);
        }
    }
    
    public void RemoveSwimStyle(SwimStyle swimStyle) {
        if (swimStyle != null){
            this.styles.remove(swimStyle);
            swimStyle.getPersons().remove(this);
        }
    }
    
    public Person() {
    }

    public Person(String name, int year) {
        this.name = name;
        this.year = year;
        this.fees = new ArrayList<>();
        this.styles = new ArrayList<>();
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
        if (address != null){
            address.setPerson(this);
        }
    }

    public Long getP_id() {
        return p_id;
    }

    public void setP_id(Long p_id) {
        this.p_id = p_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }


    
    
}
