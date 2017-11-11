package se.apendo.pingis.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Long>{
	
	 List<User> findByNameIgnoreCase(@Param("name") String name);
	 
	 List<User> findAllByOrderByRatingDesc();
	 
	 List<User> findAllByOrderByNameAsc();

}
