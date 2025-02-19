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

#### **5. Difference Between Ansible, Terraform, and CloudFormation**  
- **Ansible**: Configuration management tool (agentless) using YAML playbooks to automate app deployment, OS configuration, and orchestration.  
- **Terraform**: Infrastructure-as-Code (IaC) tool focused on provisioning cross-cloud resources (e.g., AWS, Azure) via declarative HCL syntax.  
- **CloudFormation**: AWS-specific IaC service using JSON/YAML templates to manage AWS resources.  

---

#### **6. Infrastructure as Code (IaC) Benefits**  
- **Consistency**: Eliminates manual setup errors.  
- **Version Control**: Track changes via Git.  
- **Scalability**: Replicate environments effortlessly.  
- **Cost Efficiency**: Destroy unused resources automatically.  

---

#### **7. Kubernetes Scaling Mechanisms**  
- **Horizontal Pod Autoscaling (HPA)**: Adjusts pod replicas based on CPU/memory metrics.  
- **Cluster Autoscaler**: Adds/removes worker nodes based on workload.  
- **Tools**: Prometheus for monitoring, Keda for event-driven scaling.  

---

#### **8. Blue-Green Deployment**  
- **Process**:  
  1. Deploy new version (green) alongside old (blue).  
  2. Route traffic to green after testing.  
  3. Roll back to blue if issues arise.  
- **Advantages**: Zero downtime, reduced risk.  

---

#### **9. Dockerfile Optimization**  
- **Multi-Stage Builds**: Separate build and runtime layers to reduce image size.  
- **Minimize Layers**: Combine `RUN` commands.  
- **Use Small Base Images**: Alpine Linux instead of Ubuntu.  
- **Example**:  
  ```dockerfile
  FROM node:14-alpine AS builder
  WORKDIR /app
  COPY . .
  RUN npm install && npm build

  FROM nginx:alpine
  COPY --from=builder /app/dist /usr/share/nginx/html
  ```

---

#### **10. Load Balancer in Cloud Environments**  
- **Purpose**: Distribute traffic across instances to prevent overload.  
- **Types**:  
  - **Application Load Balancer (ALB)**: Layer 7 (HTTP/HTTPS).  
  - **Network Load Balancer (NLB)**: Layer 4 (TCP/UDP).  
- **Example (AWS)**: Route traffic to EC2 instances or ECS containers.  

---

#### **11. Secrets Management in DevOps**  
- **Tools**: HashiCorp Vault, AWS Secrets Manager, Kubernetes Secrets.  
- **Best Practices**:  
  - Encrypt secrets at rest and in transit.  
  - Rotate credentials regularly.  
  - Avoid hardcoding in source control.  

---

#### **12. Horizontal vs. Vertical Scaling**  
- **Horizontal**: Add more instances (e.g., auto-scaling groups).  
- **Vertical**: Upgrade instance size (e.g., from `t2.micro` to `t2.large`).  

---

#### **13. Reverse Proxy Example**  
- **Definition**: Routes client requests to backend servers (e.g., Nginx).  
- **Use Case**: SSL termination, load balancing, caching.  
- **Nginx Config Snippet**:  
  ```nginx
  server {
    listen 80;
    location / {
      proxy_pass http://backend_servers;
    }
  }
  ```

---

#### **14. Troubleshooting a Kubernetes Service**  
1. Check pod status: `kubectl get pods`.  
2. Inspect logs: `kubectl logs <pod-name>`.  
3. Verify service endpoints: `kubectl describe service <service-name>`.  
4. Test network policies and DNS resolution.  

---

#### **15. Monitoring Best Practices**  
- **Metrics**: Track CPU, memory, disk I/O (Prometheus).  
- **Logging**: Centralize logs with ELK Stack or Loki.  
- **Alerting**: Set thresholds in Grafana or PagerDuty.  
- **End-User Monitoring**: Use tools like New Relic.  

---

#### **16. CI/CD for Containerized Apps**  
1. **Build**: Docker image creation in CI (e.g., GitHub Actions).  
2. **Test**: Scan images for vulnerabilities (Trivy).  
3. **Push**: Upload to a registry (ECR, Docker Hub).  
4. **Deploy**: Helm charts or `kubectl apply` to Kubernetes.  

---

#### **17. GitOps**  
- **Concept**: Git as the single source of truth for infrastructure and app state.  
- **Tools**: ArgoCD, Flux.  
- **Workflow**:  
  - Changes in Git trigger automated deployments.  
  - Rollbacks via Git revert.  

---

#### **18. Ensuring High Availability (HA)**  
- **Multi-AZ Deployments**: Spread resources across AWS Availability Zones.  
- **Auto-Scaling Groups**: Replace unhealthy instances.  
- **Database Replication**: Use RDS Multi-AZ or Aurora.  

---

#### **19. AWS VPC Purpose**  
- **Isolated Network**: Define subnets, route tables, and gateways.  
- **Security**: Control traffic with security groups and NACLs.  
- **Hybrid Cloud**: Connect to on-prem via VPN or Direct Connect.  

---

#### **20. REST API vs. GraphQL in Microservices**  
- **REST**:  
  - Multiple endpoints (e.g., `/users`, `/posts`).  
  - Fixed response structure.  
- **GraphQL**:  
  - Single endpoint with flexible queries.  
  - Client requests specific data fields.  
- **Use Case**: GraphQL reduces over-fetching in complex microservices architectures.