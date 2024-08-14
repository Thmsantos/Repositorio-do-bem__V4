package com.br.gov.sp.fatec.RepositorioDoBem.Model.Repository;

import com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain.Alimento;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlimentoRepository extends MongoRepository<Alimento, String> {
}
