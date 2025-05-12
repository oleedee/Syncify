package com.PlaylistTranfer.Syncify.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Artist {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
}
