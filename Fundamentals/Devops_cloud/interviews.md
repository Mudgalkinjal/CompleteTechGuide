### **Cloud & DevOps **  

#### **1. CI/CD Pipeline Configuration**  
**Process**:  
1. **Version Control**: Code hosted on Git (GitHub/GitLab).  
2. **Build Automation**: Tools like Jenkins, GitHub Actions, or CircleCI to trigger builds on `git push`.  
3. **Testing**:  
   - Unit/Integration tests (Jest, pytest).  
   - E2E tests (Cypress, Selenium).  
4. **Deployment**:  
   - Staging environment for validation.  
   - Blue-Green or Canary deployments to production (AWS CodeDeploy, Kubernetes).  
5. **Monitoring**: Logging (ELK Stack) and alerts (Prometheus + Grafana).  

**Example GitHub Actions Workflow**:  
```yaml
name: CI/CD Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install && npm test
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: aws-actions/configure-aws-credentials@v1
      - run: aws s3 sync ./dist s3://my-bucket
```

---

#### **2. What is CloudFormation?**  
- **Definition**: AWS Infrastructure-as-Code (IaC) service to define cloud resources via JSON/YAML templates.  
- **Use Case**: Automate creation of EC2 instances, S3 buckets, VPCs, etc.  
- **Example Template**:  
  ```yaml
  Resources:
    MyEC2Instance:
      Type: AWS::EC2::Instance
      Properties:
        ImageId: ami-0abcdef1234567890
        InstanceType: t2.micro
  ```

---

#### **3. EC2 Instance Design**  
- **Purpose**: Scalable virtual servers for hosting apps, databases, or batch processing.  
- **Creation Steps**:  
  1. **AWS Console**:  
     - Navigate to EC2 → Launch Instance → Choose AMI (e.g., Amazon Linux).  
     - Select instance type (e.g., `t2.micro`) → Configure security groups (SSH/HTTP access).  
  2. **AWS CLI**:  
     ```bash
     aws ec2 run-instances \
       --image-id ami-0abcdef1234567890 \
       --instance-type t2.micro \
       --key-name MyKeyPair
     ```

---

#### **4. CI/CD Pipeline Configuration (Process-Oriented)**  
- **Collaboration**: Worked with DevOps team to define stages (build, test, deploy).  
- **Automation**: Reduced manual errors by 80% using Jenkins pipelines.  
- **Metrics**: Monitored deployment success rate (goal: 99.9% uptime).  
  
---

