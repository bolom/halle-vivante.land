import os
import requests
from urllib.parse import urlparse
import re

def download_image(url, folder_path, filename=None):
    """
    Download an image from a URL and save it to a local folder
    """
    try:
        # Create the folder if it doesn't exist
        os.makedirs(folder_path, exist_ok=True)
        
        # Get the filename from the URL if not provided
        if filename is None:
            parsed_url = urlparse(url)
            filename = os.path.basename(parsed_url.path)
            if not filename or '.' not in filename:
                # Generate a generic filename if none found in URL
                filename = f"image_{hash(url) % 10000}.jpg"
        
        # Full path for the image file
        filepath = os.path.join(folder_path, filename)
        
        # Download the image
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        # Save the image
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"Successfully downloaded {filename} to {filepath}")
        return filepath
    
    except Exception as e:
        print(f"Error downloading image from {url}: {e}")
        return None

def extract_image_urls(file_path):
    """
    Extract all image URLs from the App.tsx file
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regular expression to find remote image URLs
    # This looks for URLs starting with https://raw.githubusercontent.com
    url_pattern = r'https://raw\.githubusercontent\.com/[^\s\'"\)]+\.(png|jpg|jpeg|gif|svg)'
    urls = re.findall(url_pattern, content)
    
    # Find the full URLs
    full_urls = re.findall(r'https://raw\.githubusercontent\.com/[^\s\'"\)]+\.(?:png|jpg|jpeg|gif|svg)', content)
    
    return full_urls

def main():
    app_file_path = "App.tsx"
    
    # Define the remote image URLs that are known to be used in the app
    images_to_download = [
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/main/marion-portrait.png",
            "folder": "public/assets/images",
            "filename": "marion-portrait.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_42jizq42jizq42ji.png",
            "folder": "public/assets/images",
            "filename": "ancienne_friche_gamm_vert.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_s97lovs97lovs97l.png",
            "folder": "public/assets/images",
            "filename": "etape_charpente_apparente.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_hjwoinhjwoinhjwo.png",
            "folder": "public/assets/images",
            "filename": "etape_charpente_finie.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_zhtb38zhtb38zhtb.png",
            "folder": "public/assets/images",
            "filename": "halle_vivante_hiver.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_nhf4hmnhf4hmnhf4.png",
            "folder": "public/assets/images",
            "filename": "belvedere_loing.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_l8p76ql8p76ql8p7.png",
            "folder": "public/assets/images",
            "filename": "vie_sociale_enfants.png"
        },
        {
            "url": "https://raw.githubusercontent.com/bolom/anais.earth/refs/heads/main/Gemini_Generated_Image_car5mhcar5mhcar5.png",
            "folder": "public/assets/images",
            "filename": "jardin_marche.png"
        }
    ]
    
    # Download each image
    for img_info in images_to_download:
        download_image(
            url=img_info["url"],
            folder_path=img_info["folder"],
            filename=img_info["filename"]
        )

if __name__ == "__main__":
    main()