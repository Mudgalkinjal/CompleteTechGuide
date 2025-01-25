## Core Concepts & Terminology

### 2.1 Scalability

**Scalability** refers to the system’s ability to handle **increasing loads** without degrading performance.

- **Vertical Scaling (Scaling Up)**: Adding more resources (CPU, RAM, etc.) to a single machine.
- **Horizontal Scaling (Scaling Out)**: Adding more machines (servers) and distributing the load across them.

---

### 2.2 Reliability & Availability

- **Reliability**: The probability that a system will function without failure over a certain period.
- **Availability**: The percentage of time that the system is up and running (often measured in SLAs, e.g., 99.9% = “three nines” availability).

> **Tip**: Redundancy, failover mechanisms, and careful architecture choices help ensure a high-availability (HA) system.

---

### 2.3 Performance (Latency & Throughput)

- **Latency**: The time it takes for a request to travel from the client to the server and back (often measured in ms).
- **Throughput**: The volume of requests the system can handle in a given time frame (e.g., requests/sec).

---

### 2.4 Load Balancing

- **Load Balancers** distribute incoming traffic across multiple servers so no single server gets overwhelmed.
- Helps with scalability and availability by allowing servers to be added or removed as demand changes.

---

### 2.5 Caching

**Caching** stores frequently accessed data in memory (or faster access locations) to reduce latency.

Example layers of caching:
- **Client-side caching** (e.g., browser Local Storage, in-memory data in React/Vue, etc.).
- **Edge caching** (e.g., CDN).
- **Server-side caching** (e.g., Redis, Memcached).

---

### 2.6 Databases & Storage

- **Relational Databases** (e.g., PostgreSQL, MySQL) vs. **NoSQL Databases** (e.g., MongoDB, Cassandra).
- **Sharding**: Splitting a large database into smaller “shards” for scalability and to reduce load on a single server.
- **Replication**: Duplicating data across multiple nodes to improve reliability, availability, and read performance.

---

### 2.7 Consistency Models

- **ACID**: Atomicity, Consistency, Isolation, Durability—common in relational databases.
- **BASE**: Basically Available, Soft State, Eventually Consistent—common in distributed NoSQL systems.

---

### 2.8 CAP Theorem

For a distributed system, the CAP theorem states you can only choose **two out of three**:

- **C**: Consistency
- **A**: Availability
- **P**: Partition Tolerance

Real-world systems pick trade-offs based on business needs.


## Front-End vs. Back-End in System Design

Although “system design” often focuses on back-end and infrastructure, front-end architecture is equally important for **end-to-end** system performance and user experience.

---

### 3.1 Front-End Architecture Concepts

- **Client-Side Rendering (CSR)**: Frameworks like React, Vue, and Angular render most of the UI in the browser.
- **Server-Side Rendering (SSR)**: Rendering pages on the server before sending HTML to the client (e.g., Next.js, Nuxt.js).
- **CDNs (Content Delivery Networks)**: Storing static assets (images, JS bundles, CSS) across geographically distributed servers to reduce latency.
- **Front-End Caching**: Using browser caches, service workers, or data caching patterns to reduce network calls and improve perceived performance.

> **Key Consideration**: Balancing SSR and CSR can significantly affect load time, SEO, and user experience.

---

### 3.2 Back-End Architecture Concepts

- **Monolithic Architectures**: All components (business logic, database access, front-end templates, etc.) are in one codebase/deployment.
- **Microservices**: Each service handles a specific business capability (auth, payment, search, etc.) and communicates over a network, often via REST or gRPC.
- **API Gateways**: Acts as a single entry point for client requests, directing them to the appropriate service.

> **Key Consideration**: Microservices can improve scalability and flexibility but introduce network complexity, deployment overhead, and integration challenges.
