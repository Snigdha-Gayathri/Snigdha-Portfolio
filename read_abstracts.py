import os
import zipfile
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            root = ET.fromstring(xml_content)
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            texts = []
            for elem in root.findall('.//w:t', namespaces):
                if elem.text:
                    texts.append(elem.text)
            return ' '.join(texts)
    except:
        return ""

def extract_text_from_odt(odt_path):
    try:
        with zipfile.ZipFile(odt_path) as z:
            xml_content = z.read('content.xml')
            root = ET.fromstring(xml_content)
            texts = []
            for elem in root.iter():
                if elem.text:
                    texts.append(elem.text)
                if elem.tail:
                    texts.append(elem.tail)
            return ' '.join(texts)
    except:
        return ""

search_folders = [
    r"C:\Users\snigd\ML",
    r"C:\Users\snigd\Documents",
    r"C:\Users\snigd\Desktop",
    r"C:\Users\snigd\Company Preps and Tasks",
    r"C:\Users\snigd\B. Tech PDFs",
    r"C:\Users\snigd\FYP",
    r"C:\Users\snigd\PROJECTS"
]

keywords = ["boston house", "breast cancer", "tumor classification", "property valuation"]
results = []

for folder in search_folders:
    if not os.path.exists(folder):
        continue
    for root, dirs, files in os.walk(folder):
        # Skip directories that could lead to permission issues or contain too many files
        if '.git' in root or 'node_modules' in root or '.venv' in root or '.next' in root:
            continue
        for f in files:
            fp = os.path.join(root, f)
            text = ""
            if f.endswith('.docx'):
                text = extract_text_from_docx(fp)
            elif f.endswith('.odt'):
                text = extract_text_from_odt(fp)
            elif f.endswith('.txt') or f.endswith('.md'):
                try:
                    with open(fp, 'r', encoding='utf-8', errors='ignore') as fh:
                        text = fh.read()
                except:
                    pass
            
            if text:
                matches = [kw for kw in keywords if kw in text.lower()]
                if matches:
                    results.append((fp, matches, text[:500]))

print(f"Search complete. Found {len(results)} matches.")
for fp, m, preview in results:
    print(f"\nMatch: {fp} on {m}")
    print(f"Preview: {preview}...")
