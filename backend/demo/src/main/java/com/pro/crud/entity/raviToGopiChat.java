package com.pro.crud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class raviToGopiChat {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String sendMessage;
	private String receiveMessage;
	private String timeAndDate;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSendMessage() {
		return sendMessage;
	}
	public void setSendMessage(String sendMessage) {
		this.sendMessage = sendMessage;
	}
	public String getReceiveMessage() {
		return receiveMessage;
	}
	public void setReceiveMessage(String receiveMessage) {
		this.receiveMessage = receiveMessage;
	}
	public String getTimeAndDate() {
		return timeAndDate;
	}
	public void setTimeAndDate(String timeAndDate) {
		this.timeAndDate = timeAndDate;
	}
	public raviToGopiChat(long id, String sendMessage, String receiveMessage, String timeAndDate) {
		super();
		this.id = id;
		this.sendMessage = sendMessage;
		this.receiveMessage = receiveMessage;
		this.timeAndDate = timeAndDate;
	}
	public raviToGopiChat() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "raviToGopiChat [id=" + id + ", sendMessage=" + sendMessage + ", receiveMessage=" + receiveMessage
				+ ", timeAndDate=" + timeAndDate + "]";
	}

}
