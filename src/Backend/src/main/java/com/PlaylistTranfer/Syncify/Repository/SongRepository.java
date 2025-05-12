package com.PlaylistTranfer.Syncify.Repository;

import com.PlaylistTranfer.Syncify.Model.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends CrudRepository<Song,Long> {

}
