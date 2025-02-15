# Deep Learning: Training and Neural Network Architectures

---

## Chapter 2: Training Deep Neural Networks

### 1. The Training Process
- **Steps**:
  1. **Data Preparation**: Split data into train/validation/test sets.
  2. **Initialization**: Randomly assign weights and biases.
  3. **Forward Pass**: Compute predictions.
  4. **Loss Calculation**: Compare predictions to ground truth.
  5. **Backpropagation**: Update weights using gradients.
  6. **Repeat**: Iterate over epochs/batches.
- **Key Terms**:
  - **Epoch**: One full pass through the training data.
  - **Batch Size**: Number of samples processed before updating weights.

---

### 2. Regularization Techniques
- Prevent **overfitting** (model memorizes data instead of learning patterns).
- Methods:
  - **Dropout**: Randomly disable neurons during training.
  - **L1/L2 Regularization**: Penalize large weights in the loss function.
  - **Early Stopping**: Halt training when validation loss stops improving.

---

### 3. Optimization Algorithms
- Improve how weights are updated during backpropagation:
  - **Stochastic Gradient Descent (SGD)**: Basic but slow.
  - **Adam**: Adaptive learning rates (most popular).
  - **RMSprop**: Addresses vanishing/exploding gradients.

---

### 4. Hyperparameter Tuning
- Parameters set before training (not learned):
  - Learning rate, batch size, number of layers/neurons.
  - Use tools like **grid search** or **random search** to optimize.

---

### 5. Convolutional Neural Networks (CNNs) Deep Dive
- **Key Layers**:
  - **Convolutional Layer**: Applies filters to detect features (edges, textures).
  - **Pooling Layer** (e.g., MaxPooling): Reduces spatial dimensions.
  - **Flatten Layer**: Converts 2D outputs to 1D for dense layers.
- Use Case: Dominates **image classification** tasks.

---

### 6. Data Augmentation
- Artificially expand training data by applying transformations:
  - Rotation, flipping, zooming (for images).
  - Noise injection (for audio/text).

---

## Example: CNN in Keras
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(64, 64, 3)), # Convolution
    MaxPooling2D(2,2),                                             # Pooling
    Flatten(),                                                     # Flatten
    Dense(128, activation='relu'),                                 # Hidden layer
    Dense(10, activation='softmax')                                # Output
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])