import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

export function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const services = [
    {
      id: 'it-consulting',
      name: 'IT Consulting & Strategy',
      description: 'Strategic technology planning and digital transformation',
      duration: '60 minutes',
      price: 'Free consultation'
    },
    {
      id: 'software-development',
      name: 'Software Development',
      description: 'Custom application and system development',
      duration: '45 minutes',
      price: 'Free consultation'
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      description: 'User experience and interface design consultation',
      duration: '45 minutes',
      price: 'Free consultation'
    },
    {
      id: 'visa-consultation',
      name: 'Visa Consultation',
      description: 'Immigration and visa application guidance',
      duration: '30 minutes',
      price: 'Free consultation'
    },
    {
      id: 'business-visa',
      name: 'Business Visa Services',
      description: 'Work and business visa applications',
      duration: '45 minutes',
      price: 'Free consultation'
    },
    {
      id: 'immigration-planning',
      name: 'Immigration Planning',
      description: 'Comprehensive immigration strategy',
      duration: '60 minutes',
      price: 'Free consultation'
    }
  ];

  const consultants = [
    {
      id: 'john-anderson',
      name: 'John Anderson',
      title: 'Senior IT Consultant',
      expertise: ['IT Strategy', 'Digital Transformation', 'Cloud Solutions'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 'sarah-williams',
      name: 'Sarah Williams',
      title: 'Lead Developer',
      expertise: ['Software Development', 'System Architecture', 'Tech Leadership'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      title: 'Immigration Specialist',
      expertise: ['Visa Applications', 'Immigration Law', 'Document Processing'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 'emily-rodriguez',
      name: 'Emily Rodriguez',
      title: 'UX/UI Designer',
      expertise: ['User Experience', 'Interface Design', 'Design Systems'],
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const generateCalendarDays = () => {
    const today = new Date();
    const startDate = startOfWeek(today);
    const days = [];
    
    for (let i = 0; i < 14; i++) {
      const day = addDays(startDate, i);
      days.push(day);
    }
    
    return days;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle appointment booking
    console.log('Appointment booked:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      consultant: selectedConsultant,
      ...formData
    });
    setStep(5);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    i <= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i < 4 && (
                    <div className={`flex-1 h-2 mx-4 rounded ${
                      i < step ? 'bg-blue-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {step === 1 && 'Select Service'}
                {step === 2 && 'Choose Date & Time'}
                {step === 3 && 'Select Consultant'}
                {step === 4 && 'Your Information'}
                {step === 5 && 'Booking Confirmed'}
              </h1>
              <p className="text-gray-600">
                {step === 1 && 'What service would you like to book?'}
                {step === 2 && 'When would you like to schedule your appointment?'}
                {step === 3 && 'Who would you like to meet with?'}
                {step === 4 && 'Please provide your contact details'}
                {step === 5 && 'Your appointment has been successfully booked'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedService === service.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{service.duration}</span>
                        <span className="font-medium text-blue-600">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Select Date
                    </h3>
                    <div className="grid grid-cols-7 gap-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center text-sm font-medium text-gray-600 p-2">
                          {day}
                        </div>
                      ))}
                      {calendarDays.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(day)}
                          disabled={day < new Date()}
                          className={`p-3 text-sm rounded-lg transition-colors ${
                            selectedDate && isSameDay(day, selectedDate)
                              ? 'bg-blue-600 text-white'
                              : day < new Date()
                              ? 'text-gray-300 cursor-not-allowed'
                              : 'hover:bg-blue-50 text-gray-700'
                          }`}
                        >
                          {format(day, 'd')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Select Time
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 text-sm rounded-lg border transition-colors ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Consultant Selection */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {consultants.map((consultant) => (
                    <div
                      key={consultant.id}
                      onClick={() => setSelectedConsultant(consultant.id)}
                      className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        selectedConsultant === consultant.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={consultant.image}
                          alt={consultant.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{consultant.name}</h3>
                          <p className="text-sm text-gray-600">{consultant.title}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {consultant.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs mr-2"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or any specific requirements..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
                <p className="text-gray-600 mb-8">
                  Your appointment has been successfully booked. You'll receive a confirmation email shortly.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                  <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</div>
                    <div><strong>Date:</strong> {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}</div>
                    <div><strong>Time:</strong> {selectedTime}</div>
                    <div><strong>Consultant:</strong> {consultants.find(c => c.id === selectedConsultant)?.name}</div>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Back to Home
                </button>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {step < 5 && (
              <div className="px-8 py-6 bg-gray-50 border-t flex justify-between">
                <button
                  onClick={handlePrev}
                  disabled={step === 1}
                  className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                    step === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                <button
                  onClick={step === 4 ? handleSubmit : handleNext}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && !selectedConsultant) ||
                    (step === 4 && (!formData.name || !formData.email || !formData.phone))
                  }
                  className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 4 ? 'Book Appointment' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}