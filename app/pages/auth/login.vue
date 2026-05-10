<template>
  <div class="login-container">
    <div class="bg-blur-circle-1"></div>
    <div class="bg-blur-circle-2"></div>

    <div class="login-card animate-fade-up">
      <div class="login-body">
        <h3>Selamat Datang</h3>
        <p class="subtitle">
          Silakan masuk untuk melanjutkan pencarian venue terbaik Anda.
        </p>

        <div class="role-pills">
          <button
            v-for="r in roles"
            :key="r.id"
            @click="activeRole = r.id"
            :class="['pill', { active: activeRole === r.id }]"
          >
            {{ r.label }}
          </button>
        </div>

        <p v-if="errorMessage" class="error-text animate-fade-up">
          {{ errorMessage }}
        </p>

        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label class="form-label">Alamat Email</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="alex@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Kata Sandi</label>
            <div class="password-field">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="form-control"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="eye-btn"
              >
                <i
                  :class="[
                    'fa-regular',
                    showPassword ? 'fa-eye-slash' : 'fa-eye',
                  ]"
                ></i>
              </button>
            </div>
          </div>

          <div class="form-actions">
            <label class="checkbox-container">
              <input type="checkbox" v-model="form.remember" />
              <span class="checkmark"></span>
              Ingat saya
            </label>
            <a href="#" class="forgot-link">Lupa kata sandi?</a>
          </div>

          <button
            type="submit"
            class="btn btn-primary btn-block"
            :disabled="isLoading"
          >
            <i v-if="isLoading" class="fa-solid fa-spinner fa-spin"></i>
            <span v-else>Masuk ke Akun</span>
          </button>
        </form>
      </div>

      <div class="login-footer">
        <p>
          Belum memiliki akun?
          <a href="#" class="text-gold">Daftar sekarang ↗</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const activeRole = ref("user");
const showPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

const roles = [
  { id: "user", label: "User" },
  { id: "host", label: "Host Venue" },
  { id: "admin", label: "Admin" },
];

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await api.post("auth/login", {
      email: form.email,
      password: form.password,
      role: activeRole.value,
    });

    if (response.data.status === "success") {
      const tokenCookie = useCookie('token', { maxAge: 60 * 60 * 24 * 7 })
      const userCookie = useCookie('user', { maxAge: 60 * 60 * 24 * 7 })
      tokenCookie.value = response.data.token
      userCookie.value = JSON.stringify(response.data.user)

      if (response.data.user.role !== activeRole.value) {
        errorMessage.value = `Akun Anda terdaftar sebagai ${response.data.user.role}, bukan ${activeRole.value}.`;
        isLoading.value = false;
        return;
      }

      router.push("/admin");
    }
  } catch (error) {
    // Menangani error dari backend (misal: password salah)
    errorMessage.value =
      error.response?.data?.message || "Terjadi kesalahan saat login.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
/* Integrasi Variabel CSS User */
:root {
  --color-primary: #8b7133;
  --color-bg: #f8fafc;
  --color-text: #334155;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc; /* Menggunakan bg-light dari CSS kamu */
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

/* Dekorasi Background Bulat Halus */
.bg-blur-circle-1 {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: rgba(139, 113, 51, 0.05);
  filter: blur(80px);
  border-radius: 50%;
}

.bg-blur-circle-2 {
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 300px;
  height: 300px;
  background: rgba(15, 23, 42, 0.03);
  filter: blur(60px);
  border-radius: 50%;
}

.login-card {
  background: white;
  width: 100%;
  max-width: 480px;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
  z-index: 10;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.login-header {
  margin-bottom: 2.5rem;
}

.brand-logo {
  background-color: #8b7133;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 1rem;
  font-size: 1.2rem;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.brand-tagline {
  font-size: 9px;
  letter-spacing: 0.3em;
  color: #8b7133;
  font-weight: 700;
  text-transform: uppercase;
}

h3 {
  font-size: 1.75rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

/* Role Pills */
.role-pills {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  background: #f1f5f9;
  padding: 0.4rem;
  border-radius: 99px;
}

.pill {
  padding: 0.6rem 1.2rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  background: transparent;
  transition: var(--transition);
}

.pill.active {
  background: white;
  color: #8b7133;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Form Styles dari CSS Kamu */
.form-group {
  text-align: left;
  margin-bottom: 1.5rem;
}

.form-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.6rem;
}

.form-control {
  width: 100%;
  padding: 0.9rem 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #f8fafc;
  font-family: "Manrope", sans-serif;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #8b7133;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(139, 113, 51, 0.08);
}

.password-field {
  position: relative;
}

.eye-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: #94a3b8;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.forgot-link {
  color: #8b7133;
  font-weight: 600;
}

.btn-block {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 12px;
}

/* Divider & Social */
.divider {
  margin: 2rem 0;
  position: relative;
}
.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e2e8f0;
}
.divider span {
  position: relative;
  background: white;
  padding: 0 1rem;
  color: #94a3b8;
  font-size: 0.8rem;
}

.social-login {
  display: flex;
  justify-content: center;
}

.btn-social {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 2rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  color: #334155;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-social img {
  width: 18px;
}

.login-footer {
  margin-top: 2.5rem;
  font-size: 0.95rem;
  color: #64748b;
}

.animate-fade-up {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 2rem 1.5rem;
  }
}
</style>
