import { observable } from 'mobx'
import React, { Component } from 'react';

export class Item {
    @observable name
    @observable completed = false
    @observable location = "super sell"
    constructor(name) {
        this.name = name
    }


}