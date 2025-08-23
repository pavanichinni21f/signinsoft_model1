import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Type, 
  Image, 
  Layout, 
  Square, 
  Circle,
  Code,
  Save,
  Eye,
  Smartphone,
  Tablet,
  Monitor,
  Undo,
  Redo
} from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Component {
  id: string;
  type: 'text' | 'image' | 'button' | 'container';
  content: string;
  styles: Record<string, string>;
}

function SortableComponent({ component, onSelect, isSelected }: { 
  component: Component, 
  onSelect: (id: string) => void,
  isSelected: boolean 
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const renderComponent = () => {
    switch (component.type) {
      case 'text':
        return (
          <div 
            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
              isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelect(component.id)}
          >
            <p style={component.styles}>{component.content}</p>
          </div>
        );
      case 'image':
        return (
          <div 
            className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-colors ${
              isSelected ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelect(component.id)}
          >
            <img 
              src={component.content || 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'} 
              alt="Component" 
              className="w-full h-48 object-cover"
              style={component.styles}
            />
          </div>
        );
      case 'button':
        return (
          <div 
            className={`p-2 border-2 rounded-lg cursor-pointer transition-colors ${
              isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelect(component.id)}
          >
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              style={component.styles}
            >
              {component.content}
            </button>
          </div>
        );
      default:
        return (
          <div 
            className={`p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
              isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => onSelect(component.id)}
          >
            <p className="text-gray-500">Container</p>
          </div>
        );
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-4"
    >
      {renderComponent()}
    </div>
  );
}

export function BuilderPage() {
  const [components, setComponents] = useState<Component[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const componentTypes = [
    { type: 'text', label: 'Text', icon: Type, color: 'bg-blue-100 text-blue-600' },
    { type: 'image', label: 'Image', icon: Image, color: 'bg-green-100 text-green-600' },
    { type: 'button', label: 'Button', icon: Square, color: 'bg-purple-100 text-purple-600' },
    { type: 'container', label: 'Container', icon: Layout, color: 'bg-orange-100 text-orange-600' },
  ];

  const addComponent = (type: string) => {
    const newComponent: Component = {
      id: `${type}-${Date.now()}`,
      type: type as any,
      content: getDefaultContent(type),
      styles: getDefaultStyles(type),
    };
    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent.id);
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'text': return 'Click to edit text';
      case 'image': return 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400';
      case 'button': return 'Click me';
      default: return '';
    }
  };

  const getDefaultStyles = (type: string) => {
    switch (type) {
      case 'text': return { fontSize: '16px', color: '#374151' };
      case 'image': return { width: '100%', height: 'auto' };
      case 'button': return { backgroundColor: '#2563eb', color: 'white' };
      default: return {};
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setComponents((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const selectedComponentData = components.find(c => c.id === selectedComponent);

  const updateSelectedComponent = (property: string, value: string) => {
    if (!selectedComponent) return;
    
    setComponents(components.map(component => 
      component.id === selectedComponent 
        ? { 
            ...component, 
            [property]: property === 'styles' ? { ...component.styles, ...JSON.parse(value) } : value 
          }
        : component
    ));
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Left Sidebar - Components */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Components</h2>
          <div className="grid grid-cols-2 gap-3">
            {componentTypes.map((component) => (
              <button
                key={component.type}
                onClick={() => addComponent(component.type)}
                className={`p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all group ${component.color}`}
              >
                <component.icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{component.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Component Properties */}
        {selectedComponentData && (
          <div className="flex-1 p-6 overflow-y-auto">
            <h3 className="font-semibold text-gray-900 mb-4">Properties</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={selectedComponentData.content}
                  onChange={(e) => updateSelectedComponent('content', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>

              {selectedComponentData.type === 'text' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                    <select
                      value={selectedComponentData.styles.fontSize || '16px'}
                      onChange={(e) => updateSelectedComponent('styles', JSON.stringify({ fontSize: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="12px">12px</option>
                      <option value="14px">14px</option>
                      <option value="16px">16px</option>
                      <option value="18px">18px</option>
                      <option value="24px">24px</option>
                      <option value="32px">32px</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                    <input
                      type="color"
                      value={selectedComponentData.styles.color || '#374151'}
                      onChange={(e) => updateSelectedComponent('styles', JSON.stringify({ color: e.target.value }))}
                      className="w-full p-1 border border-gray-300 rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Undo className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Redo className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'desktop' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Monitor className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'tablet' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Tablet className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 p-8 overflow-auto bg-gray-100">
          <div className={`mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
            viewMode === 'desktop' ? 'max-w-6xl' :
            viewMode === 'tablet' ? 'max-w-2xl' : 'max-w-sm'
          }`}>
            <div className="min-h-[600px] p-6">
              {components.length === 0 ? (
                <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Start building your page</p>
                    <p className="text-gray-400">Add components from the left sidebar</p>
                  </div>
                </div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext items={components.map(c => c.id)} strategy={verticalListSortingStrategy}>
                    {components.map((component) => (
                      <SortableComponent
                        key={component.id}
                        component={component}
                        onSelect={setSelectedComponent}
                        isSelected={selectedComponent === component.id}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}