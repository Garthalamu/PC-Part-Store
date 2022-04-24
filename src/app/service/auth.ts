import { Injectable, NgZone } from '@angular/core';
import { User } from '../service/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor() {

  }


}
