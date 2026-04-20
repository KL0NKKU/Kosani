import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: '',
      error: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Lähetys epäonnistui.');
      }

      setStatus({
        loading: false,
        success: 'Kiitos! Viestisi on lähetetty.',
        error: ''
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: '',
        error: error.message || 'Jokin meni pieleen.'
      });
    }
  };

  return (
    <section id="ota-yhteytta" className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 mx-auto">
            <div className="mb-8">
              <h3 className="fs-16 py-2 px-3 text-main d-inline rounded-pill oswald">Ota yhteyttä</h3>
              <h2 className="mt-3 mb-3 oswald justify-content-center">Pyydä tarjous tai kysy lisää</h2>
              <p className="roboto">Ota yhteyttä lomakkeella, niin palaamme asiaan mahdollisimman pian.</p>
            </div>

            <form className="row g-4 text-start" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label roboto">
                  Nimi
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Kirjoita nimesi"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label roboto">
                  Puhelin
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control"
                  placeholder="Kirjoita puhelinnumero"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label roboto">
                  Sähköposti
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Kirjoita sähköpostiosoite"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label roboto">
                  Viesti
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="6"
                  placeholder="Kerro, miten voimme auttaa"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary rounded roboto" disabled={status.loading}>
                  {status.loading ? 'Lähetetään...' : 'Lähetä viesti'}
                </button>
              </div>

              {status.success && (
                <div className="col-12 text-center">
                  <p className="text-success roboto mb-0">{status.success}</p>
                </div>
              )}

              {status.error && (
                <div className="col-12 text-center">
                  <p className="text-danger roboto mb-0">{status.error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
