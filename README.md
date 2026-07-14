# 🚀 AWS DevOps Monitoring Platform

A production-style DevOps monitoring platform deployed on AWS EC2 with automated CI/CD using GitHub Actions. This project demonstrates cloud deployment, infrastructure automation, real-time system monitoring, application management, and DevOps best practices using AWS Free Tier services.

---

## ✨ Features

- 🚀 Automated CI/CD pipeline using GitHub Actions
- ☁️ Deployment on AWS EC2 (Ubuntu)
- 🌐 Nginx Reverse Proxy configuration
- ⚙️ PM2 Process Management
- 📊 Real-time Monitoring Dashboard
- ❤️ Health Check API
- 💾 Automated Amazon S3 Backup
- 📈 Amazon CloudWatch Monitoring & Alarms
- 🔐 IAM Least Privilege Security
- 🧪 Load Testing using k6
- 📦 Live Deployment Information
- 💻 Real-time CPU, Memory, Disk & Uptime Monitoring

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Cloud | AWS EC2, Amazon S3, Amazon CloudWatch, IAM |
| Backend | Node.js, Express.js |
| DevOps | GitHub Actions, PM2, Nginx |
| Monitoring | System Information API, CloudWatch |
| Testing | k6 |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```text
devops-technical-assignment
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── data/
│   └── deployment.json
│
├── docs/
│   └── Final_Report.pdf
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── dashboard.js
│   └── index.html
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📊 Monitoring Dashboard

The dashboard provides real-time information including:

- 🖥️ Hostname
- 💻 Operating System
- ⚡ CPU Usage
- 🧠 Memory Usage
- 💽 Disk Usage
- ⏱️ System Uptime
- 🚀 Deployment Details
- ⚙️ PM2 Process Status
- ❤️ Application Health
- ☁️ AWS Services Overview

---

## 🔄 CI/CD Workflow

```text
Developer
     │
     ▼
Push Code to GitHub
     │
     ▼
GitHub Actions
     │
     ▼
SSH into AWS EC2
     │
     ▼
git pull
     │
     ▼
npm install
     │
     ▼
PM2 Restart
     │
     ▼
Nginx
     │
     ▼
Production Application
```

---

## 📚 Documentation

The **docs/** folder contains:

- Deployment Guide
- Architecture Diagram
- GitHub Actions Workflow
- CloudWatch Configuration
- S3 Backup Configuration
- IAM Security Configuration
- Load Testing Results
- Deployment Screenshots
- Final Project Report

---



## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/GoliPavan888/aws-devops-monitoring-platform.git
```

### Navigate to Project

```bash
cd devops-technical-assignment
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
npm start
```

Open your browser:

```text
http://localhost:3000
```

---

## 📌 Future Improvements

- Docker Containerization
- Kubernetes Deployment
- Terraform Infrastructure as Code
- Grafana Dashboard Integration
- Prometheus Metrics Collection
- HTTPS using SSL/TLS
- Multi-Environment Deployment

---

## 👨‍💻 Author

**Pavan Kumar Goli**

B.Tech Computer Science & Engineering  
AWS Certified Solutions Architect – Associate  
AWS Certified Developer – Associate  

**Skills:** AWS • DevOps • Linux • Docker • GitHub Actions • Node.js • CI/CD

---

## ⭐ If you found this project useful, consider giving it a Star.