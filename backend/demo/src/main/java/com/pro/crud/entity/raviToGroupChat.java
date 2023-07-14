package com.pro.crud.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class raviToGroupChat {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String sendMessage;
	private String ramMsg;
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
	public String getRamMsg() {
		return ramMsg;
	}
	public void setRamMsg(String ramMsg) {
		this.ramMsg = ramMsg;
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
	public raviToGroupChat(long id, String sendMessage, String ramMsg, String gopiMsg, String timeAndDate) {
		super();
		this.id = id;
		this.sendMessage = sendMessage;
		this.ramMsg = ramMsg;
		this.gopiMsg = gopiMsg;
		this.timeAndDate = timeAndDate;
	}
	public raviToGroupChat() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "raviToGroupChat [id=" + id + ", sendMessage=" + sendMessage + ", ramMsg=" + ramMsg + ", gopiMsg="
				+ gopiMsg + ", timeAndDate=" + timeAndDate + "]";
	}

}
