package com.pro.crud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ramToGroupChat {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String sendMessage;
	private String raviMsg;
	private String gopiMsg;
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
	public String getRaviMsg() {
		return raviMsg;
	}
	public void setRaviMsg(String raviMsg) {
		this.raviMsg = raviMsg;
	}
	public String getGopiMsg() {
		return gopiMsg;
	}
	public void setGopiMsg(String gopiMsg) {
		this.gopiMsg = gopiMsg;
	}
	public String getTimeAndDate() {
		return timeAndDate;
	}
	public void setTimeAndDate(String timeAndDate) {
		this.timeAndDate = timeAndDate;
	}
	public ramToGroupChat(long id, String sendMessage, String raviMsg, String gopiMsg, String timeAndDate) {
		super();
		this.id = id;
		this.sendMessage = sendMessage;
		this.raviMsg = raviMsg;
		this.gopiMsg = gopiMsg;
		this.timeAndDate = timeAndDate;
	}
	public ramToGroupChat() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ramToGroupChat [id=" + id + ", sendMessage=" + sendMessage + ", raviMsg=" + raviMsg + ", gopiMsg="
				+ gopiMsg + ", timeAndDate=" + timeAndDate + "]";
	}

}
