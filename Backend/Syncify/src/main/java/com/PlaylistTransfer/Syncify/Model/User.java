package com.PlaylistTransfer.Syncify.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import se.michaelthelin.spotify.SpotifyApi;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

//    private SpotifyApi spotifyApi;
}
