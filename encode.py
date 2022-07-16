#import tensorflow_hub as hub
#import tensorflow as tf
import torch
import os
from sentence_transformers import SentenceTransformer
# print("amongu s")
os.environ['KMP_DUPLICATE_LIB_OK']='TRUE'
# Load the model
def embedd(text):

    model = SentenceTransformer("all-mpnet-base-v2")

    # Prepare some text to embed

    # Embed the text
    embeddings = model.encode(text)
    compressed = []
    for i in range(32):
        sum = 0.0
        for j in range(24):
            dex = 24*i + j
            sum = sum + embeddings[dex]
        sum = sum/24
        compressed.append(sum)
    return compressed

#embedd("among us")
# # Compute a semantic similarity via the cosine distance
# semantic_sim = 1 - cosine(embeddings[0], embeddings[1])

# text = "amog us"
# def embedd(text):
#     # os.environ['KMP_DUPLICATE_LIB_OK']='TRUE'
#     # embed = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
#     # em = embed([text])
#     english_sentences = tf.constant(["dog", "Puppies are nice.", "I enjoy taking long walks along the beach with my dog."])

#     preprocessor = hub.KerasLayer(
#     "https://tfhub.dev/tensorflow/bert_en_uncased_preprocess/3")
#     encoder = hub.KerasLayer(
#     "https://tfhub.dev/google/universal-sentence-encoder-cmlm/en-large/1")

#     english_embeds = encoder(preprocessor(english_sentences))["default"]

#     print (english_embeds)
#     #print("obama")
#    # x = torch.tensor(1,32)
#    # for i in range(32):
#     #    sum = 0.0
#     #    for j in range(16):
#     #        dex = i*16+j
#     #        sum = sum + em[0][dex]
#     #    sum = sum/16
#     #    x[0][i] = sum
#     #return x.numpy()
# embedd(text)

