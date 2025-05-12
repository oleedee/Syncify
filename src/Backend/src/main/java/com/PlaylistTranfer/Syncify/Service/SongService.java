package com.PlaylistTranfer.Syncify.Service;

import com.PlaylistTranfer.Syncify.Model.Song;
import com.PlaylistTranfer.Syncify.Repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {
     SongRepository songRepository;

    public SongService(@Autowired SongService songService){

    }
    public Song createSong(Song song){

        return songRepository.save(song);
    }
}
