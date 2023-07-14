package com.pro.crud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class gopiToGroupChat {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String sendMessage;
	private String ramMsg;
	private String raviMsg;
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
	public String getRamMsg() {
		return ramMsg;
	}
	public void setRamMsg(String ramMsg) {
		this.ramMsg = ramMsg;
	}
	public String getRaviMsg() {
		return raviMsg;
	}
	public void setRaviMsg(String raviMsg) {
		this.raviMsg = raviMsg;
	}
	public String getTimeAndDate() {
		return timeAndDate;
	}
	public void setTimeAndDate(String timeAndDate) {
		this.timeAndDate = timeAndDate;
	}
	public gopiToGroupChat(long id, String sendMessage, String ramMsg, String raviMsg, String timeAndDate) {
		super();
		this.id = id;
		this.sendMessage = sendMessage;
		this.ramMsg = ramMsg;
		this.raviMsg = raviMsg;
		this.timeAndDate = timeAndDate;
	}
	public gopiToGroupChat() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "gopiToGroupChat [id=" + id + ", sendMessage=" + sendMessage + ", ramMsg=" + ramMsg + ", raviMsg="
				+ raviMsg + ", timeAndDate=" + timeAndDate + "]";
	}

}
