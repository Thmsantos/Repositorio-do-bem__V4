package com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Usuario {

    @Id
    private String usuarioId;
    private String cnpj;
    private String nomeEmpresa;
    private String cep;
    private String email;
    private String senha;
    private String endereco;
    private Boolean status;

    public Usuario(String usuarioId, String cnpj, String nomeEmpresa, String cep, String email, String senha, String endereco, Boolean status) {
        super();
        this.usuarioId = usuarioId;
        this.cnpj = cnpj;
        this.nomeEmpresa = nomeEmpresa;
        this.cep = cep;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.status = status;
    }

    public String getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(String usuarioId) {
        this.usuarioId = usuarioId;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Boolean getStatus(){
        return status;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
