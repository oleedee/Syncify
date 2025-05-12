package com.PlaylistTranfer.Syncify.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Song {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String songName;
    @ManyToMany
    private Set<Artist> artist = new HashSet<>();
    @ManyToMany
    private Set<Album> albums ;

    public Song(Long id, String songName ) {
        this.id = id;
        this.songName = songName;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public Set<Artist> getArtist() {
        return artist;
    }

    public void setArtist(Set<Artist> artist) {
        this.artist = artist;
    }

    public Set<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(Set<Album> albums) {
        this.albums = albums;
    }
}
