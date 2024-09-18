package com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Alimento {

    @Id
    private String alimentoId;
    private String nome;
    private String peso;
    private String validade;
    private String idDoador;
    private String emailDoador;
    private String flag;

    public Alimento(String alimentoId, String nome, String peso, String validade, String flag, String idDoador, String emailDoador) {
        super();
        this.alimentoId = alimentoId;
        this.nome = nome;
        this.peso = peso;
        this.validade = validade;
        this.flag = flag;
        this.idDoador = idDoador;
        this.emailDoador = emailDoador;
    }

    public String getAlimentoId() {
        return alimentoId;
    }

    public void setAlimentoId(String alimentoId) {
        this.alimentoId = alimentoId;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPeso() {
        return peso;
    }

    public void setPeso(String peso) {
        this.peso = peso;
    }

    public String getvalidade() {
        return validade;
    }

    public void setvalidade(String validade) {
        this.validade = validade;
    }

    public String getIdDoador() {
        return idDoador;
    }

    public void setIdDoador(String idDoador) {
        this.idDoador = idDoador;
    }

    public String getEmailDoador() {
        return emailDoador;
    }

    public void setEmailDoador(String emailDoador) {
        this.emailDoador = emailDoador;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

}

