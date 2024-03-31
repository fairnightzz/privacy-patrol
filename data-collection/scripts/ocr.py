import requests

def ocr_space_api(image_path, api_key):
    """
    Perform OCR using OCR.space API on the given image.

    Parameters:
    image_path (str): A file path to the image.
    api_key (str): Your OCR.space API key.

    Returns:
    str: Extracted text from the image.
    """
    with open(image_path, 'rb') as image_file:
        files = {'file': image_file}
        payload = {
            'apikey': api_key,
            'language': 'eng',
        }
        url = 'https://api.ocr.space/parse/image'
        response = requests.post(url, files=files, data=payload)
        result = response.json()
        print(result)
        text = result.get('ParsedResults')[0].get('ParsedText')
        return text

# Example usage
api_key = 'K84173756888957'
image_path = '.data/mathew/IMG_2376.jpeg'
extracted_text = ocr_space_api(image_path, api_key)
print(extracted_text)
