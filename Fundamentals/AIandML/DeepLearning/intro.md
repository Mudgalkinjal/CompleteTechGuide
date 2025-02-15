# Introduction to Deep Learning

## What is Deep Learning?
- Subset of **machine learning** inspired by the structure of the human brain.
- Uses artificial **neural networks** with multiple layers ("deep" layers) to learn patterns from data.
- Excels at tasks like image recognition, natural language processing (NLP), and speech recognition.

---

## Key Concepts

### 1. Neural Networks
- **Basic unit**: **Neuron** (node) that processes inputs and passes outputs to the next layer.
- **Layers**:
  - **Input Layer**: Receives raw data.
  - **Hidden Layers**: Intermediate layers that transform inputs (can be many).
  - **Output Layer**: Produces final prediction/result.

### 2. Activation Functions
- Introduce non-linearity to the model.
- Common examples:
  - **ReLU** (Rectified Linear Unit): `f(x) = max(0, x)`
  - **Sigmoid**: Maps values to (0, 1).
  - **Softmax**: Used for multi-class classification.

### 3. Forward Propagation
- Data flows from input → hidden layers → output layer to generate predictions.

### 4. Loss Function
- Measures how well the model performs (e.g., Mean Squared Error for regression, Cross-Entropy for classification).

### 5. Backpropagation
- Adjusts **weights** and **biases** by propagating errors backward through the network.
- Uses optimization algorithms like **Gradient Descent**.

---

## Common Architectures

| Architecture         | Use Case                          | Example                          |
|----------------------|-----------------------------------|----------------------------------|
| **CNN**              | Image processing                  | ResNet, VGG                      |
| (Convolutional NN)   |                                   |                                  |
| **RNN**              | Sequential data                   | LSTM, GRU                        |
| (Recurrent NN)       | (text, time series)               |                                  |
| **GAN**              | Generative tasks                  | StyleGAN, DeepFake              |
| (Generative Adversarial Network) |                                   |                                  |

---

## Popular Frameworks
1. **TensorFlow** (Google)
2. **PyTorch** (Meta)
3. **Keras** (High-level API for TensorFlow)

---

## Applications
- **Computer Vision**: Object detection, facial recognition.
- **NLP**: Chatbots, translation (e.g., GPT, BERT).
- **Healthcare**: Disease prediction from scans.
- **Autonomous Vehicles**: Self-driving cars.

---

## Advantages & Challenges
| **Pros**                     | **Cons**                          |
|------------------------------|------------------------------------|
| Handles unstructured data     | Requires large datasets           |
| Automatic feature extraction | Computationally expensive         |
| State-of-the-art performance  | "Black box" (hard to interpret)   |

---

## Example Code (Keras)
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Create a simple neural network
model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),  # Input layer
    Dense(64, activation='relu'),                       # Hidden layer
    Dense(10, activation='softmax')                     # Output layer
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])