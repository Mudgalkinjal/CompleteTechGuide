### **Linux/Systems **  

#### **1. Common Linux Commands**  
| Command | Purpose |  
|---------|---------|  
| `ls`    | List directory contents |  
| `cd`    | Change directory |  
| `grep`  | Search text patterns |  
| `chmod` | Change file permissions |  
| `chown` | Change file ownership |  

#### **2. Changing Permissions**  
- **Symbolic Mode**:  
  ```bash
  chmod u+x script.sh    # Add execute permission for the owner
  chmod go-w file.txt    # Remove write permission for group/others
  ```  
- **Numeric Mode**:  
  ```bash
  chmod 755 script.sh    # Owner: RWX, Group/Others: RX
  ```  

---