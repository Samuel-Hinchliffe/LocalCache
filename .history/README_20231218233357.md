<br />
<div align="center">
  <a >
    <img src="git/logo.png" alt="Logo" width="100" height="100" style="border-radius: 100%">
  </a>

  <h3 align="center">Vertex Search - AI CBIR (Image Search)</h3>

  <p align="center">
    🤖 <a href="https://en.wikipedia.org/wiki/Content-based_image_retrieval#:~:text=%22Content%2Dbased%22%20means%20that,derived%20from%20the%20image%20itself.">Content-based Image Recognition Simplified.</a>
    <br />
    <a href="https://github.com//Samuel-Hinchliffe/Chess.com-analyser"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>


# About 
Have you ever wondered how reverse image searches work and how machines can find patterns in images? <a href="https://en.wikipedia.org/wiki/Content-based_image_retrieval#:~:text=%22Content%2Dbased%22%20means%20that,derived%20from%20the%20image%20itself.">Content-based Image Recognition.</a> is what's often used to achieve this. 

<a href="https://en.wikipedia.org/wiki/Content-based_image_retrieval#:~:text=%22Content%2Dbased%22%20means%20that,derived%20from%20the%20image%20itself.">Content-based Image Recognition </a>enables machines to analyze the visual content of images, enabling the identification of patterns and similarities. It's akin to the experience of uploading a picture to a reverse image search engine and witnessing its ability to magically find other images that are similar or related. This magic is achieved by extracting features from the uploaded image, such as shapes, colors, textures, and patterns, and comparing them to the corresponding features of other images stored in a database. This process allows for the retrieval of visually similar images based on their shared visual characteristics.

This project does this in a simple manner you can use to learn from / use as a template for your own project. 

![img](./git/example.png)

## 💻 Usage
1. Create a new directory for your project and navigate to it:
```bash
mkdir vertex_search_project
cd vertex_search_project
``` 
2. Set up a virtual environment using your preferred tool (e.g., virtualenv, venv, or conda):
```bash
virtualenv venv
```

3. Activate the virtual environment
```bash 
For Windows:
venv\Scripts\activate

For Linux:
source venv/bin/activate
```
5. Install the required packages from the requirementsWindows.txt file if you're using Windows:
```bash
pip install -r requirementsWindows.txt
```
6. Install the required packages from the requirementsWindows.txt file if you're using Windows:
```bash
pip install -r requirementsWindows.txt
```
7.  Put your images (The ones you want to show the user when they upload an image) into the 'static/dataset' directory.
8. python image_feature_extractor.py (This will preprocess your images from .2)
9. python image_search_app_server.py (This will start the flask server)

## 💻 Usage & Development using Docker (Linux)
```console
1. docker build -t development_image -f DockerfileDevelopment .
2. Run using: docker run -v "$(pwd)":/app -p 8888:5000 image_search_development python /app/ {filename}
```

## 💻 Host using Docker
```console
1. docker build -t image-search-app . 
2. docker run -p 8080:80 image-search-app
```

## 🚩 Why CBIR?
What is the point of <a href="https://en.wikipedia.org/wiki/Content-based_image_retrieval#:~:text=%22Content%2Dbased%22%20means%20that,derived%20from%20the%20image%20itself.">Content-based Image Recognition</a>? What does it really solve? 

Many machine learning systems generate predictions on their last layer, which can be represented as vectors. These vectors often encode information about the predicted classes or labels, such as 'This image contains a T-shirt' or 'This image contains an apple'. (**This is a gross over-simplification**). While vector-based representations offer certain advantages, such as providing straightforward binary answers, they have limitations compared to Content-Based Image Retrieval (CBIR) systems. Vector-based approaches yield results that are more akin to black or white answers.

Vector-based representations can sometimes exhibit a binary nature, resulting in limitations. Furthermore, these representations often require extensive training data with numerous labels and classes, making the training process labor-intensive.

Consider this image as an example of the limitations of vector-based representations. In certain cases, these representations may lack the necessary abstraction to capture vital information effectively. If vector-based models are not specifically trained to account for crucial details, they may overlook or disregard important aspects
![test](git/apple.png)

Another example, labeling variations in t-shirt designs poses a significant challenge due to the sheer number of possible design combinations and the constantly evolving fashion trends. It is impractical to manually label each unique design, making traditional vector-based approaches inadequate for this task 
![test](git/tshirt.png)

### Advantages of CBIR over Vector-based representations  
- Extraction of meaningful features from images, such as color, texture, shape, and spatial relationships. This allows for a more nuanced understanding of image content, enabling more accurate and detailed retrieval. 
- 
- Image similarity and relevance: CBIR systems excel at capturing image similarity and relevance based on content. By analyzing the content of an image, CBIR systems can identify similar images based on their visual characteristics. This enables more precise retrieval and eliminates the binary nature of results, as images are ranked based on their similarity scores (In our case, [Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance)) rather than being categorized into discrete classes.
- 
- Reduced dependency on labeled data: Unlike vector-based approaches that often require extensive labeled training data, CBIR systems can leverage unsupervised or weakly supervised learning methods. They can learn directly from image features without relying heavily on labeled data. This makes CBIR systems more scalable and adaptable to various domains, reducing the labor-intensive process of manual labeling.

### Disadvantages of CBIR over Vector-based representations  

- Sensitivity to variations and noise: CBIR systems can be sensitive to variations in images, such as changes in lighting conditions, viewpoint and scale. Small differences in image content or noise can significantly impact the similarity calculations and retrieval accuracy.

- Scalability and computational complexity: As the number of images / feature representations in a database increases, the computational complexity of CBIR systems can become a challenge. Matching and comparing image features against a large image collection can be time-consuming and resource-intensive. 

- Limited context and understanding: CBIR systems primarily focus on analyzing image content and features without considering broader contextual information. They may not fully capture the context, intent, or subjective aspects related to image retrieval. For example: specific user preferences may not be adequately accounted for, limiting the system's ability to retrieve images based on these factors. For instance, consider a scenario where a user wants to find specifically blue t-shirts. If the t-shirt images are not appropriately labeled or represented as 'blue,' CBIR systems may struggle to achieve the desired granularity. Unlike vector-based representation approaches, which can rely on explicit labels, CBIR systems primarily analyze visual features and may lack the fine-grained control offered by labeled vectors.

## 💻 How it works
Content-Based Image Retrieval (CBIR) is a technique that allows machines to search and retrieve images based on their visual content rather than relying on textual descriptions or metadata. CBIR systems analyze the visual features of images and compare them to find similarities or matches.

![t](./git/how.png)

CBIR Systems often work like this:

1. Feature Extraction. 
   1. An image is passed through a Convolutional Neural Network such as [VGG16](https://neurohive.io/en/popular-networks/vgg16/) or [ResNet](https://iq.opengenus.org/resnet50-architecture/). Extraction will then occur getting the meaningful and representative features from images. These features can include color, texture, shape, and spatial relationships. 
   2. The extracted features from the images result in a collection of arrays that represent the visual characteristics of each image. 

2. Indexing & Storage. 
   1. CBIR systems typically use indexing techniques to organize and store the image features. Indexing structures like databases or inverted files (In our case .npy files) are used to facilitate fast and efficient retrieval based on feature similarity. These indexing structures allow for quick searching and matching of images.
   2. In a production system, you'd likely have these features stored within a database for quick and efficient retrieval. I'd recommend using MongoDB or any other well supported NoSQL database.  

3. Retrieval & Ranking
   1. The query image (For instance, an image uploaded using this app) is processed to extract its features using the same methods as during feature extraction. 
   2. The comparison between the query features and the stored features is done using a similarity measurement technique. Such as Euclidean distance.
   3. After computing the similarity scores, the CBIR system ranks the images based on their similarity to the input query. The most visually similar images are typically presented as the top results. The ranking allows users to retrieve images that closely match their query and explore related or visually similar images.
   4. Now ranked, you can display the top results of the search. Showing the images that look most similar to the input query. 

