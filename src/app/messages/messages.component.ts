import { Component, OnInit } from '@angular/core';
import { StompService, StompConfig, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

import {MessagingService} from '../services/messaging.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  private messageHistory: string[] = [];

  private WEBSOCKET_URL = 'ws://localhost:9721/socket';
  private EXAMPLE_URL = '/topic/server-broadcaster';
  private messagingService: MessagingService;

  state = 'NOT CONNECTED';

  ngOnInit() {
    // Instantiate a messagingService
    this.messagingService = new MessagingService(this.WEBSOCKET_URL, this.EXAMPLE_URL);

    // Subscribe to its stream (to listen on messages)
    this.messagingService.stream().subscribe((message: Message) => {
      this.messageHistory.unshift(message.body);
      console.log(message);
    });

    // Subscribe to its state (to know its connected or not)
    this.messagingService.state().subscribe((state: StompState) => {
      this.state = StompState[state];
    });
  }


  public onSendMessage() {
    console.log('Sending message');
    this.messagingService.send('/server-receiver', {
      text: 'This is cool',
      text2: "I'm so happy!"
    });
  }
}
