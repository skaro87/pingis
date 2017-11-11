package se.apendo.pingis.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MatchRepository extends CrudRepository<Match, Long>{

	List<Match> findFirst10ByOrderByIdDesc();

}
