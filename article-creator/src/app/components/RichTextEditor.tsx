import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Image, Code } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [activeTab, setActiveTab] = useState<'visual' | 'text' | 'html'>('visual');
  
  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'align': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image'],
      ],
    },
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'align',
    'link', 'image'
  ];

  const handleAddTrackingCode = () => {
    const trackingCode = `\n\n<!-- Tracking Code -->\n<script>\n  // Add your tracking code here\n</script>\n<!-- End Tracking Code -->\n\n`;
    onChange(value + trackingCode);
  };

  return (
    <div className="rich-text-editor">
      {/* Editor Mode Tabs */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-1">
          <button 
            className={`px-4 py-2 text-sm font-medium rounded ${
              activeTab === 'visual' 
                ? 'bg-white border border-gray-300' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('visual')}
          >
            Visual
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded ${
              activeTab === 'text' 
                ? 'bg-white border border-gray-300' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('text')}
          >
            Text
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium rounded ${
              activeTab === 'html' 
                ? 'bg-white border border-gray-300' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            // Copy the content to clipboard
            navigator.clipboard.writeText(value);
            alert('Content copied to clipboard!');
          }}
          className="flex items-center gap-2"
        >
          Copy Text
        </Button>
      </div>
      
      {/* Editor Content */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Custom top bar */}
        <div className="flex items-center justify-start px-4 py-3 border-b border-gray-200 bg-white gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2 h-8">
            <Image size={16} />
            Add Media
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 h-8"
            onClick={handleAddTrackingCode}
          >
            <Code size={16} />
            Add Tracking Code
          </Button>
        </div>
        
        {/* Quill Editor */}
        {activeTab === 'visual' && (
          <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            className="wysiwyg-custom"
            style={{ minHeight: '500px' }}
          />
        )}
        
        {activeTab === 'text' && (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-6 min-h-[500px] border-0 focus:outline-none font-mono text-sm"
            style={{ resize: 'vertical' }}
          />
        )}
        
        {activeTab === 'html' && (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-6 min-h-[500px] border-0 focus:outline-none font-mono text-sm"
            style={{ resize: 'vertical' }}
          />
        )}
      </div>
      
      <style>{`
        .wysiwyg-custom .ql-toolbar {
          border: none;
          border-bottom: 1px solid #e5e7eb;
          background: white;
          padding: 12px 16px;
        }
        
        .wysiwyg-custom .ql-container {
          border: none;
          font-family: inherit;
          font-size: 15px;
          min-height: 500px;
        }
        
        .wysiwyg-custom .ql-editor {
          padding: 24px;
          min-height: 500px;
        }
        
        .wysiwyg-custom .ql-editor h1 {
          font-size: 2em;
          font-weight: 700;
          margin-bottom: 0.5em;
        }
        
        .wysiwyg-custom .ql-editor h2 {
          font-size: 1.5em;
          font-weight: 700;
          margin-bottom: 0.5em;
        }
        
        .wysiwyg-custom .ql-editor h3 {
          font-size: 1.25em;
          font-weight: 600;
          margin-bottom: 0.5em;
        }
        
        .wysiwyg-custom .ql-editor p {
          margin-bottom: 1em;
          line-height: 1.7;
        }
        
        .wysiwyg-custom .ql-toolbar button {
          width: 32px;
          height: 32px;
        }
        
        .wysiwyg-custom .ql-toolbar button:hover {
          color: #000;
        }
        
        .wysiwyg-custom .ql-toolbar button.ql-active {
          color: #000;
        }
        
        .wysiwyg-custom .ql-toolbar .ql-stroke {
          stroke: #6b7280;
        }
        
        .wysiwyg-custom .ql-toolbar button:hover .ql-stroke {
          stroke: #000;
        }
        
        .wysiwyg-custom .ql-toolbar button.ql-active .ql-stroke {
          stroke: #000;
        }
        
        .wysiwyg-custom .ql-toolbar .ql-fill {
          fill: #6b7280;
        }
        
        .wysiwyg-custom .ql-toolbar button:hover .ql-fill {
          fill: #000;
        }
        
        .wysiwyg-custom .ql-toolbar button.ql-active .ql-fill {
          fill: #000;
        }
        
        .wysiwyg-custom .ql-toolbar .ql-picker-label {
          color: #374151;
          border: 1px solid #d1d5db;
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        .wysiwyg-custom .ql-toolbar .ql-picker-label:hover {
          color: #000;
          border-color: #9ca3af;
        }
      `}</style>
    </div>
  );
}